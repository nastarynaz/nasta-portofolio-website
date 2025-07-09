"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { createClient } from "@/utils/supabase/client";

export function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = createClient();

  // Check for error from redirect
  const redirectError = searchParams.get("error");

  async function handleSubmit(formData) {
    setIsLoading(true);
    setError(null);

    const email = formData.get("email");
    const password = formData.get("password");

    try {
      // Sign in with Supabase Auth
      const { data, error: signInError } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (signInError) {
        setError("Email atau password salah");
        return;
      }

      if (data.user) {
        // Check if user is admin
        const { data: adminUser, error: adminError } = await supabase
          .from("admin_users")
          .select("*")
          .eq("id", data.user.id)
          .single();

        if (adminError || !adminUser) {
          await supabase.auth.signOut();
          setError("Anda tidak memiliki akses admin");
          return;
        }

        router.push("/admin");
      }
    } catch (error) {
      setError("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Login Admin</CardTitle>
        <CardDescription>Masukkan kredensial admin Anda</CardDescription>
      </CardHeader>
      <CardContent>
        {(error || redirectError) && (
          <Alert className="mb-4 border-red-200 bg-red-50">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              {error ||
                (redirectError === "unauthorized"
                  ? "Anda tidak memiliki akses admin"
                  : "Terjadi kesalahan")}
            </AlertDescription>
          </Alert>
        )}

        <form action={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="admin@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

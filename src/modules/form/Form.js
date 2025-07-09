"use client";

import { useState } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, AlertCircle } from "lucide-react";
import DefaultLayout from "@/components/Layout/DefaultLayout";
import { NavbarResolver } from "@/components/Elements/Navbar/NavbarResolver";

export default function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  async function handleSubmit(formData) {
    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: "Pesan berhasil dikirim!" });
        // Reset form
        const form = document.getElementById("submission-form");
        form?.reset();
      } else {
        setMessage({
          type: "error",
          text: result.error || "Terjadi kesalahan",
        });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Terjadi kesalahan jaringan" });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <DefaultLayout>
      <NavbarResolver />
      <Card>
        <CardHeader>
          <CardTitle>Form Pengiriman Pesan</CardTitle>
          <CardDescription>
            Isi form di bawah ini untuk mengirim pesan kepada admin
          </CardDescription>
        </CardHeader>
        <CardContent>
          {message && (
            <Alert
              className={`mb-4 ${
                message.type === "success"
                  ? "border-green-200 bg-green-50"
                  : "border-red-200 bg-red-50"
              }`}
            >
              {message.type === "success" ? (
                <CheckCircle className="h-4 w-4 text-green-600" />
              ) : (
                <AlertCircle className="h-4 w-4 text-red-600" />
              )}
              <AlertDescription
                className={
                  message.type === "success" ? "text-green-800" : "text-red-800"
                }
              >
                {message.text}
              </AlertDescription>
            </Alert>
          )}

          <form
            id="submission-form"
            action={handleSubmit}
            className="space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Nama Lengkap</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Masukkan nama lengkap Anda"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="nama@email.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Pesan</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tulis pesan Anda di sini..."
                rows={5}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </DefaultLayout>
  );
}

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { Admin } from "@/modules/admin/Admin";

export default async function AdminPage() {
  const supabase = await createClient();

  // Check if user is authenticated
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/admin/login");
  }

  // Check if user is admin
  const { data: adminUser, error: adminError } = await supabase
    .from("admin_users")
    .select("*")
    .eq("id", user.id)
    .single();

  if (adminError || !adminUser) {
    redirect("/admin/login?error=unauthorized");
  }

  // Fetch submissions
  const { data: submissions, error: submissionsError } = await supabase
    .from("submissions")
    .select("*")
    .order("created_at", { ascending: false });

  if (submissionsError) {
    console.error("Error fetching submissions:", submissionsError);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Admin submissions={submissions || []} adminUser={adminUser} />
    </div>
  );
}

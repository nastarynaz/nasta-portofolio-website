import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/client";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Semua field harus diisi" },
        { status: 400 }
      );
    }

    // Get client IP and user agent for tracking
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const userAgent = request.headers.get("user-agent") || "unknown";

    const supabase = createClient();

    // Insert submission
    const { error } = await supabase.from("submissions").insert({
      name,
      email,
      message,
      ip_address: ip,
      user_agent: userAgent,
    });

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Gagal menyimpan data" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}

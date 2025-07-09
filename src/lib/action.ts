"use server";

import { createServerClient } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export interface FormState {
  success?: boolean;
  message?: string;
  errors?: Record<string, string>;
}

export async function submitSurveyForm(
  prevState: FormState | null,
  formData: FormData
): Promise<FormState> {
  try {
    // Extract form data
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const age = formData.get("age") as string;
    const country = formData.get("country") as string;
    const interests = formData.getAll("interests") as string[];
    const experience = formData.get("experience") as string;
    const rating = formData.get("rating") as string;
    const bio = formData.get("bio") as string;
    const newsletter = formData.get("newsletter") === "on";

    // Basic validation
    if (!name || !email) {
      return {
        success: false,
        message: "Name and email are required",
        errors: {
          name: !name ? "Name is required" : "",
          email: !email ? "Email is required" : "",
        },
      };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: "Please enter a valid email address",
        errors: { email: "Invalid email format" },
      };
    }

    const supabase = createServerClient();

    // Insert data into Supabase
    const { data, error } = await supabase
      .from("survey_responses")
      .insert({
        name,
        email,
        age: age ? Number.parseInt(age) : null,
        country: country || null,
        interests,
        experience: experience || null,
        rating: rating ? Number.parseInt(rating) : null,
        bio: bio || null,
        newsletter,
      })
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return {
        success: false,
        message: "Failed to submit form. Please try again.",
        errors: { general: error.message },
      };
    }

    // Revalidate the page to show updated data
    revalidatePath("/");

    return {
      success: true,
      message: `Thank you ${name}! Your survey has been submitted successfully.`,
    };
  } catch (error) {
    console.error("Form submission error:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
      errors: { general: "Unexpected error" },
    };
  }
}

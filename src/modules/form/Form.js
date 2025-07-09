"use client";

import { useActionState } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { submitSurveyForm } from "@/lib/action";

import DefaultLayout from "@/components/Layout/DefaultLayout";
import { NavbarResolver } from "@/components/Elements/Navbar/NavbarResolver";

export default function Form() {
  const [state, action, isPending] = useActionState(submitSurveyForm, null);

  const [rating, setRating] = useState([5]);
  const [selectedInterests, setSelectedInterests] = useState([]);

  const handleInterestChange = (interest, checked) => {
    if (checked) {
      setSelectedInterests([...selectedInterests, interest]);
    } else {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    }
  };

  return (
    <DefaultLayout>
      <NavbarResolver />
      <div className="max-w-2xl mx-auto p-4">
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-800">
              Random Survey Form
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Help us get to know you better by filling out this comprehensive
              form
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={action} className="space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-700 border-b pb-2">
                  Basic Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      required
                      className={state?.errors?.name ? "border-red-500" : ""}
                    />
                    {state?.errors?.name && (
                      <p className="text-red-500 text-sm">
                        {state.errors.name}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className={state?.errors?.email ? "border-red-500" : ""}
                    />
                    {state?.errors?.email && (
                      <p className="text-red-500 text-sm">
                        {state.errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      name="age"
                      type="number"
                      min="13"
                      max="120"
                      placeholder="25"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Select name="country">
                      <SelectTrigger>
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                        <SelectItem value="de">Germany</SelectItem>
                        <SelectItem value="fr">France</SelectItem>
                        <SelectItem value="jp">Japan</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Interests */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-700 border-b pb-2">
                  Interests
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "Technology",
                    "Sports",
                    "Music",
                    "Travel",
                    "Cooking",
                    "Reading",
                  ].map((interest) => (
                    <div key={interest} className="flex items-center space-x-2">
                      <Checkbox
                        id={interest}
                        name="interests"
                        value={interest}
                        checked={selectedInterests.includes(interest)}
                        onCheckedChange={(checked) =>
                          handleInterestChange(interest, checked)
                        }
                      />
                      <Label htmlFor={interest} className="text-sm">
                        {interest}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience Level */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-700 border-b pb-2">
                  Experience Level
                </h3>
                <RadioGroup name="experience" defaultValue="intermediate">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="beginner" id="beginner" />
                    <Label htmlFor="beginner">Beginner</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="intermediate" id="intermediate" />
                    <Label htmlFor="intermediate">Intermediate</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="advanced" id="advanced" />
                    <Label htmlFor="advanced">Advanced</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="expert" id="expert" />
                    <Label htmlFor="expert">Expert</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Rating */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-700 border-b pb-2">
                  Overall Satisfaction
                </h3>
                <div className="space-y-2">
                  <Label>Rate your experience (1-10): {rating[0]}</Label>
                  <Slider
                    value={rating}
                    onValueChange={setRating}
                    max={10}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <input type="hidden" name="rating" value={rating[0]} />
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-2">
                <Label htmlFor="bio">Tell us about yourself</Label>
                <Textarea
                  id="bio"
                  name="bio"
                  placeholder="Share something interesting about yourself..."
                  rows={4}
                />
              </div>

              {/* Newsletter */}
              <div className="flex items-center space-x-2">
                <Switch id="newsletter" name="newsletter" />
                <Label htmlFor="newsletter">Subscribe to our newsletter</Label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isPending}
              >
                {isPending ? "Submitting..." : "Submit Form"}
              </Button>
            </form>

            {/* Success Message */}
            {state?.success && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="text-green-800 font-semibold">Success!</h4>
                <p className="text-green-700">{state.message}</p>
              </div>
            )}

            {/* Error Message */}
            {state?.success === false && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <h4 className="text-red-800 font-semibold">Error</h4>
                <p className="text-red-700">{state.message}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DefaultLayout>
  );
}

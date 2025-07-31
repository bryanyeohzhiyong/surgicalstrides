"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-4 md:p-10">
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Surgical Strides</h1>
        <p className="text-lg md:text-xl text-gray-600">Minimalist insights into training, nutrition, and recovery</p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">🏃‍♂️ Training Tips</h2>
            <p className="text-gray-700 mb-4">
              Weekly training breakdowns, trail running techniques, and insights from personal experience as a surgical trainee balancing endurance sports.
            </p>
            <Button variant="outline">Read More</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">🥗 Nutrition</h2>
            <p className="text-gray-700 mb-4">
              Evidence-based nutritional advice tailored for endurance runners – fuelling before, during, and after long runs.
            </p>
            <Button variant="outline">Explore Nutrition</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">🧘 Recovery & Balance</h2>
            <p className="text-gray-700 mb-4">
              How to integrate recovery, rest, and mental focus into a demanding training lifestyle. Surgical call? Still want to run? I’ve got tips.
            </p>
            <Button variant="outline">See Recovery Tips</Button>
          </CardContent>
        </Card>
      </section>

      <footer className="mt-16 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Surgical Strides. Built with clarity and purpose.
      </footer>
    </main>
  );
}
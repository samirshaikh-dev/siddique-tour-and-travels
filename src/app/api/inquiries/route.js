import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();

    // Required fields validation
    if (!data.name || !data.phone) {
      return NextResponse.json(
        { error: "Name and phone number are required." },
        { status: 400 }
      );
    }

    // Basic sanitization
    const inquiry = {
      name: String(data.name).trim().slice(0, 100),
      phone: String(data.phone).trim().slice(0, 20),
      journeyType: data.journeyType || "Umrah",
      travelers: data.travelers || "2",
      departureCity: String(data.departureCity || "Not specified").trim().slice(0, 50),
      createdAt: new Date().toISOString(),
    };

    // Log received lead safely
    console.log("[INQUIRY_RECEIVED]", inquiry);

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry received successfully. Our team will contact you soon.",
        data: inquiry,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("[INQUIRY_ERROR]", err);
    return NextResponse.json(
      { error: "Internal server error. Please try again or reach out on WhatsApp." },
      { status: 500 }
    );
  }
}

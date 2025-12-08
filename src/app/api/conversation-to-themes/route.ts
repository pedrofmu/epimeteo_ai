import { NextRequest, NextResponse } from "next/server";
import { ConversationToThemesResponse } from "@/types/api/conversation-to-themes";
import { mockThemes } from "./mock-data";

const isFile = (value: FormDataEntryValue | null): value is File =>
  value instanceof File;

export async function POST(req: NextRequest) {
  const contentType = req.headers.get("content-type") ?? "";

  if (!contentType.includes("multipart/form-data")) {
    return NextResponse.json(
      { error: "Send a multipart/form-data request with an 'audio' file field." },
      { status: 400 }
    );
  }

  const formData = await req.formData();
  const audio = formData.get("audio");

  if (!isFile(audio)) {
    return NextResponse.json(
      { error: "Audio file missing. Use the 'audio' field in form data." },
      { status: 400 }
    );
  }

  const responsePayload: ConversationToThemesResponse = {
    themes: mockThemes,
    receivedFile: {
      name: audio.name,
      type: audio.type,
      size: audio.size,
    },
  };

  return NextResponse.json(responsePayload);
}

export function GET() {
  return NextResponse.json({
    message: "Use POST with multipart/form-data containing an 'audio' file.",
  });
}

// app/api/load-model/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
// @ts-ignore if you haven't added types
import nodePickle from 'node-pickle';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'public_cluster.pkl');
    const fileBuffer = await fs.readFile(filePath);
    const model = await nodePickle.load(fileBuffer);
    return NextResponse.json({ model });
  } catch (err: any) {
    console.error('Error loading model:', err);
    return new NextResponse('Failed to load model', { status: 500 });
  }
}

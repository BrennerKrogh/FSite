import Image from "next/image";
import fs from "fs";
import path from "path";
import exifr from "exifr";
import AutoScrollOnIdle from "./AutoScrollOnIdle";
import Navbar from "@/components/Navbar";

export default async function PhotosPage() {
  // Read the /public/photos directory at build time (server-side only)
  const photosDir = path.join(process.cwd(), "public", "photos");
  let files: string[] = [];
  try {
    files = fs.readdirSync(photosDir)
      .filter(f =>
        /^[^.].*\.(jpe?g|png|webp|gif)$/i.test(f)
      );
  } catch (e) {
    // Directory may not exist yet
  }

  // Read EXIF date for each file (async)
  const photoData = await Promise.all(
    files.map(async filename => {
      const filePath = path.join(photosDir, filename);
      let dateTaken: Date | null = null;
      try {
        const exif = await exifr.parse(filePath, ["DateTimeOriginal"]);
        if (exif && exif.DateTimeOriginal) {
          dateTaken = exif.DateTimeOriginal;
        }
      } catch {}
      if (!dateTaken) {
        // Fallback to file mtime
        const stat = fs.statSync(filePath);
        dateTaken = stat.mtime;
      }
      return {
        src: `/photos/${filename}`,
        alt: filename.replace(/[-_]/g, ' ').replace(/\.[^.]+$/, ''),
        dateTaken,
      };
    })
  );

  // Sort by dateTaken, newest first
  photoData.sort((a, b) => b.dateTaken.getTime() - a.dateTaken.getTime());

  return (
    <AutoScrollOnIdle>
      <main className="min-h-screen bg-black relative">
        <Navbar />
        <div className="absolute top-2 left-2 z-10 text-xs text-gray-300 bg-black bg-opacity-60 px-2 py-1 rounded pointer-events-none select-none">
          *wait 10 seconds to start slideshow
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold text-center text-white mb-8 px-4 pt-8">Photo Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
          {photoData.map((photo, idx) => (
            <div key={idx} className="w-full aspect-[4/3] bg-gray-900 overflow-hidden flex items-center justify-center">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={800}
                height={600}
                className="object-cover w-full h-full"
                priority={idx < 3}
              />
            </div>
          ))}
          {photoData.length === 0 && (
            <div className="col-span-full text-center text-gray-400">No photos found in <code>/public/photos</code>.</div>
          )}
        </div>
      </main>
    </AutoScrollOnIdle>
  );
}

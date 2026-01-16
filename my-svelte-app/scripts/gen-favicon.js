import { readFile, writeFile } from 'fs/promises';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const __dirname = dirname(fileURLToPath(import.meta.url));
const logoPath = resolve(__dirname, '../static/logo.svg');
const outPath = resolve(__dirname, '../static/favicon.ico');

async function main() {
  const svg = await readFile(logoPath);
  const sizes = [16, 32, 48, 64];
  const pngBuffers = await Promise.all(
    sizes.map((size) =>
      sharp(svg)
        .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
        .png()
        .toBuffer()
    )
  );

  const ico = await pngToIco(pngBuffers);
  await writeFile(outPath, ico);
  console.log('favicon.ico generated at static/favicon.ico');
}

main().catch((err) => {
  console.error('Failed to generate favicon.ico', err);
  process.exit(1);
});

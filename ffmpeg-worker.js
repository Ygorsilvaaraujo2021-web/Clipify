// Simple worker script (node) that demonstrates how to call ffmpeg to cut clips.
// In production, use a job queue (BullMQ) and run ffmpeg in a container with enough CPU.
const { exec } = require('child_process')
const path = require('path')

function cutClip(inputPath, start, duration, outPath, cb) {
  const cmd = `ffmpeg -y -i "${inputPath}" -ss ${start} -t ${duration} -c:v libx264 -c:a aac -b:a 128k -vf "scale=1280:-2" "${outPath}"`
  exec(cmd, (err, stdout, stderr) => {
    if (err) return cb(err)
    cb(null, outPath)
  })
}

// Example usage (for local testing):
if (require.main === module) {
  const args = process.argv.slice(2)
  if (args.length < 4) {
    console.log('Usage: node ffmpeg-worker.js <input> <start> <duration> <out>')
    process.exit(1)
  }
  cutClip(args[0], args[1], args[2], args[3], (err, out) => {
    if (err) console.error('Error:', err)
    else console.log('Created', out)
  })
}

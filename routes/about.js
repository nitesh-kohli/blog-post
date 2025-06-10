import Router  from 'express';
const router = Router();

const aboutContent = `Welcome to Your Personal Journal Space 🌱

Every day is a new story — some filled with joy, some with lessons, and all worth remembering.

This is your safe corner of the internet, where you can freely write your thoughts, feelings, and moments that matter.

Whether it’s a small win, a deep reflection, or just a note to your future self — begin writing and let your mind unwind.

Start journaling today, one entry at a time.

"Capture today, revisit tomorrow."`;

router.get("/", (req, res) => {
  res.render("about", {aboutContent: aboutContent});
});

export default router;
import { Router } from "express";
import { getEnhancedPosts } from "../services/pingService";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const posts = await getEnhancedPosts();
    res.json(posts);
  } catch (err) {
    next(err);
  }
});

export default router;

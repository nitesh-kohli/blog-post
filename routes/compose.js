import Router  from 'express';
const router = Router();

router.get("/compose", function(req, res){
  res.render("compose");
});

export default router;


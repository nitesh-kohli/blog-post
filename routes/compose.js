import Router  from 'express';
const router = Router();

router.get("/", function(req, res){
  res.render("compose");
});

export default router;


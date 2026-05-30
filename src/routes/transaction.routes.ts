import {Router} from "express";
import {authenticate} from "../middlewares/auth.middlewares";
import {upload} from "../middlewares/upload.middleware";
import { createTransaction, getTransactionById, getTransactions, updateTransactionStatus } from "../controllers/transaction.controller";

const router = Router();

router.post("/checkout", upload.single("image"), createTransaction);
router.get("/", authenticate, getTransactions);
router.get("/:id", getTransactionById);
router.put("/:id/status", authenticate, upload.none(), updateTransactionStatus);

export default router;
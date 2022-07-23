import { createRouter } from "next-connect";
import {
  getAllKreditur,
  saveKreditur,
} from "../../../controller/krediturController/KrediturController";

const router = createRouter();
router.get(getAllKreditur);
router.post(saveKreditur);
export default router.handler();

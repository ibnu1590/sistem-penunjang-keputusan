import { createRouter } from "next-connect";
import {
  getKrediturById,
  deleteKrediturById,
  updateKreditur,
} from "../../../controller/krediturController/KrediturController";

const router = createRouter();
router.get(getKrediturById);
router.delete(deleteKrediturById);
router.put(updateKreditur);
export default router.handler();

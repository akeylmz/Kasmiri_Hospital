
import { elements } from "chart.js";
import BodroAddModal from "./components/modals/BodroAddModal";
import InvoiceModal from "./components/modals/InvoiceModal";
import PatientAddModal from "./components/modals/PatientAddModal";
import ProductAddModal from "./components/modals/ProductAddModal";
import StockAddModal from "./components/modals/StockAddModal";
import StockOrderModal from "./components/modals/StockOrderModal";
import WorkerCheck from "./components/modals/WorkerCheck";
import WorkerQuest from "./components/modals/WorkerQuest";
import YabancıModal from "./components/modals/YabancıModal";
import WorkerAddModal from "./components/modals/WorkerAddModal";

const modals = [
    {
        name: 'patient',
        element: PatientAddModal
    },
    {
        name: "stock",
        element: StockAddModal
    },
    {
        name: "product",
        element: ProductAddModal
    },
    {
        name: "worker-quest",
        element: WorkerQuest
    },
    {
        name: "worker-check",
        element: WorkerCheck
    },
    {
        name: "invoice-modal",
        element: InvoiceModal
    },
    {
        name: "bodro-modal",
        element: BodroAddModal
    },
    {
        name: "yabancı-modal",
        element: YabancıModal
    },
    {
        name: "stockOrder",
        element: StockOrderModal
    },
    {
        name: "workerAdd",
        element: WorkerAddModal
    }
]

export default modals

import InvoiceModal from "./components/modals/InvoiceModal";
import PatientAddModal from "./components/modals/PatientAddModal";
import ProductAddModal from "./components/modals/ProductAddModal";
import StockAddModal from "./components/modals/StockAddModal";
import WorkerCheck from "./components/modals/WorkerCheck";
import WorkerQuest from "./components/modals/WorkerQuest";

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
    }
]

export default modals
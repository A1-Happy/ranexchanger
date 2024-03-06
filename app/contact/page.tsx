import ContactForm from "../Components/ContactForm"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

export default function contact(){
    return (
    <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow p-8">
            <div className="p-4">
                <h2 className="text-4xl text-green-600 font-bold mb-10">Frequently Asked Question (F.A.Q)</h2>
<ContactForm />
                </div>
            </main>

            <Footer />
        </div>)
}
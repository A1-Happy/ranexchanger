import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"



export default function faqs() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow p-8">
                <div className="p-4">
                    <h2 className="text-4xl text-green-600 font-bold mb-10">Frequently Asked Question (F.A.Q)</h2>

                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>What is RanExchanger?</AccordionTrigger>
                            <AccordionContent>
                                RanExchanger.co.in is a digital & Crypto currency exchanger owned by RanExchanger Services is an online service provider that helps everyone to find exchangers or can deposit and withdraw their funds with the best rates and fastest process.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Is RanExchanger legitimate?</AccordionTrigger>
                            <AccordionContent>
                                √We're Online on Service Since 2015. For Proof click this link http://whois.domaintools.com/ranexchanger.co.in<br /><br />
                                √We have company registered bank account in the name of RanExchanger itself. For Proof make a test transfer like Rs,1 or verify our UPI ID<br /><br />
                                √Paytm business approved merchant as RanExchanger. For Proof make test transfer like Rs,1 or verify our paytm ID<br /><br />
                                √We're AstroPay authorized distributor for selling AstroPay cards. For Proof check https://astropay.com or app and check buy option then select local distributor section.<br /><br />
                                √Official Google Reviews»  https://goo.gl/JRHSyi
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Is RanExchanger Website Secured?</AccordionTrigger>
                            <AccordionContent>
                                Yes, Domain & Hosted at Godaddy with Standrad SSL & EV SSL enabled website. It show Green Bar in URL https://  Your sensitive data like Email, Phone Number, Bank Details etc.. are fully secured.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Where can I check today's rates or prices?</AccordionTrigger>
                            <AccordionContent>
                                In Our Rates Page, you can find Buy Rates, Sell Rates & Exchange Rates updated daily. To vistit click here right away.<br /><br />
                                VIEW BUY-SELL RATES
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>Where can I place my orders?</AccordionTrigger>
                            <AccordionContent>
                                Step 1: First contact us in our any of these available live support channels. For example, on WhatsApp, Telegram, or Website Live Chat.<br /><br />
                                Step 2: If you Buy, Get our payment details like Account No, Ifsc,UPI, GooglePay, Paytm etc. If you Sell, Get our E-currency account details.<br /><br />
                                Step 3: Make Payment from your own bank account, Paytm, etc. or E-currency account. And share transaction screen shot/slip to us.<br /><br />
                                That's all, then we will do the rest. And process your deposit/withdrawal Instantly.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger>What is AstroPay Voucher?</AccordionTrigger>
                            <AccordionContent>
                                Astropay Voucher is like gift voucher or one time usable recharge card. We can share you virtual card directly here on whatsapp which shows card number, expiry date and Available balance etc.<br /><br />
                                Please note, this is not credit or debit or any bank related cards, so it doesn't has any name, kyc, etc.  AstroPay Voucher can be used only on merchants or websites those accepts AstroPay Voucher as their payment/deposit methods.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-7">
                            <AccordionTrigger>Is there any other restrictions or conditions apply?</AccordionTrigger>
                            <AccordionContent>
                                *You should not make any payments to our any bank accounts or Ecurrency accounts without confirming us on any of Live Chat.<br /><br />
                                *You should contact & confirm us everytime before you making any payments to our any accounts.<br /><br />
                                *If you choose to pay us through IMPS bank transfer or any UPI like GPay, Phonepe etc. or Paytm, Your UPI/Paytm/IMPS bank registered mobile number also must be same as your contact number with us.<br /><br />
                                *In case your bank registered number is different than WhatsApp number, we may ask you to verify your payment registered number by call if needed.<br /><br />
                                *If you don't know what I saying above or to avoid this issue, simply make a test payment of Rs 1 first and ask us to check.  Once I accepted and verified, you can go head with full payment for your purchases.<br /><br />
                                *In case any IMPS/UPI bank transfer amount debited, But NOT RECEIVED in our account due to technical issue on bank side, this takes up to 48 hours for debited money to return back or credit to beneficiary. We don't release your purchase until we received successful payment.<br /><br />
                                *And the very important thing, as a professional and trusted exchange service provider we never do any kind of advance payment or advance credits to our any users and/or even to very old clients. We may block you & stop business with you incase you ask the same forcefully.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    
                </div>
            </main>

            <Footer />
        </div>

    )
}
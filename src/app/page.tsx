"use client"

import { printHTMLCode } from "@/lib/print-html-code";
import { useState } from "react";


function formatDate(inputDate: string) {
  inputDate ? inputDate : inputDate = '2023/09/05';
  const parts = inputDate.split('-');
  const formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
  return formattedDate;
}

export default function Home() {

  const [match, setMatch] = useState<string>('')
  const [date, setDate] = useState<string>()
  const [backgroundUrl, setBackgroundUrl] = useState<string>('')
  const [coutasUrl, setCuotasUrl] = useState<string>('')
  const [landingPageUrl, setLandingPageUrl] = useState<string>('')

  function copyHtml() {
    navigator.clipboard.writeText(
      printHTMLCode({
        match,
        date: formatDate(date!),
        backgroundUrl,
        coutasUrl,
        landingPageUrl,
      })
    )
  }

  return (
    <main className="bg-neutral-900 min-h-screen">
      <h1 className="font-bold text-2xl text-center text-neutral-300 mb-3">Newsletter - Juegging</h1>

      <div className="w-11/12  md:w-9/12 lg:w-1/2 mx-auto bg-neutral-800/50 p-5 rounded" >
        <form>
          <fieldset className="flex gap-3">
            <legend className="text-neutral-50 text-xl font-bold">Datos</legend>
            <label htmlFor="match" className="block mb-5 w-full ">
              <span className="text-neutral-400 text-xs">Partido</span>
              <input className="border border-neutral-700 rounded my-2 p-2 w-full bg-neutral-600 text-neutral-50"
                type="text"
                name="match"
                onChange={(event) => setMatch(event.target.value)}
                placeholder="VALENCIA - LEVANTE"
              />
            </label>
            <label htmlFor="date" className="block mb-5 w-full ">
              <span className="text-neutral-400 text-xs">Fecha</span>
              <input className="border border-neutral-700 rounded my-2 p-2 w-full bg-neutral-600 text-neutral-50"
                type="date"
                name="date"
                onChange={(event) => setDate(event.target.value)}
              />
            </label>
          </fieldset>


          <fieldset className="flex items-center gap-3">
            <legend className="text-neutral-50 text-xl font-bold ">Imágenes</legend>
            <label htmlFor="backgroundUrl" className="block mb-5 w-full ">
              <span className="text-neutral-400 text-xs">Background URL (Imágen)</span>
              <input className="border border-neutral-700 rounded my-2 p-2 w-full bg-neutral-600 text-neutral-50"
                type="text"
                name="backgroundUrl"
                onChange={(event) => setBackgroundUrl(event.target.value)}
                placeholder="https://juegging.es/wp-content/newsletter/cashback-2023/valencia-levante/background.jpg"
              />
            </label>

            <label htmlFor="coutasUrl" className="block mb-5 w-full ">
              <span className="text-neutral-400 text-xs">Coutas URL (Imágen)</span>
              <input className="border border-neutral-700 rounded my-2 p-2 w-full bg-neutral-600 text-neutral-50"
                type="text"
                name="coutasUrl"
                onChange={(event) => setCuotasUrl(event.target.value)}
                placeholder="https://juegging.es/wp-content/newsletter/cashback-2023/valencia-levante/coutas.jpg"
              />
            </label>

          </fieldset>


          <fieldset>
            <legend className="text-neutral-50 text-xl font-bold">Enlaces</legend>
            <label htmlFor="landingPageUrl" className="block mb-5">
              <span className="text-neutral-400 text-xs">Landing page (URL)</span>
              <input className="border border-neutral-700 rounded my-2 p-2 w-full bg-neutral-600 text-neutral-50"
                type="text"
                name="landingPageUrl"
                onChange={(event) => setLandingPageUrl(event.target.value)}
                placeholder="https://juegging.es/promocion/valencia-levante/"
              />
            </label>
          </fieldset>



        </form>
      </div>


      <section className="w-11/12  md:w-9/12 lg:w-1/2 mx-auto text-neutral-50">

        <div className="flex items-center justify-start gap-9 mt-10 mb-3">
          <h2 className="font-bold">Código HTML</h2>
          <button className="bg-neutral-100 text-neutral-900 rounded px-2 py-1 hover:bg-neutral-200" onClick={copyHtml}>Copiar HTML</button>
        </div>

        <details>
          <summary className=" bg-neutral-100 text-neutral-900 rounded px-2 py-1 hover:bg-neutral-200 hover:cursor-pointer w-content">Mostrar código</summary>
          <div className="bg-neutral-700 p-5 rounded" >
            {
              printHTMLCode({
                match,
                date: formatDate(date!),
                backgroundUrl,
                coutasUrl,
                landingPageUrl,
              })
            }
          </div>
        </details>

        {/* <div className="bg-neutral-700 p-5 rounded" >
          {
            printHTMLCode({
              match,
              date: formatDate(date!),
              backgroundUrl,
              coutasUrl,
              landingPageUrl,
            })
          }
        </div> */}
      </section>
    </main>
  )
}

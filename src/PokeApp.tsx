import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { routes } from "./routes"
import { Header } from "./components"

export const PokeApp = () => {

  return (
      <div className="flex flex-col h-screen z-[1]">
        <Header/>
        <main className="flex-1 overflow-y-auto">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {routes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Routes>
          </Suspense>
        </main>
      </div>
    )
}

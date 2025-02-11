// 'use client'

// import { createContext, useContext, useState } from 'react'

// type ToastVariant = 'default' | 'destructive' | 'success' | 'info'

// interface Toast {
//   title: string
//   description: string
//   variant?: ToastVariant
// }

// interface ToastContextType {
//   toast: (toast: Toast) => void
// }

// const ToastContext = createContext<ToastContextType | undefined>(undefined)

// export const useToast = () => {
//   const context = useContext(ToastContext)
//   if (!context) {
//     throw new Error('useToast must be used within a ToastProvider')
//   }
//   return context
// }

// export const ToastProvider: React.FC = ({ children }) => {
//   const [toasts, setToasts] = useState<Toast[]>([])

//   const toast = (newToast: Toast) => {
//     setToasts((prevToasts) => [...prevToasts, newToast])
//     setTimeout(() => {
//       setToasts((prevToasts) => prevToasts.filter((toast) => toast !== newToast))
//     }, 5000) // Elimina el toast después de 5 segundos
//   }

//   return (
//     <ToastContext.Provider value={{ toast }}>
//       {children}
//       <div className="fixed bottom-4 right-4 space-y-2">
//         {toasts.map((toast, index) => (
//           <div key={index} className={`toast ${toast.variant || 'default'}`}>
//             <div>
//               <strong>{toast.title}</strong>
//               <p>{toast.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </ToastContext.Provider>
//   )
// }


'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type ToastVariant = 'default' | 'destructive' | 'success' | 'info'

interface Toast {
  title: string
  description: string
  variant?: ToastVariant
}

interface ToastContextType {
  toast: (toast: Toast) => void
}

// Creamos el contexto para el Toast
const ToastContext = createContext<ToastContextType | undefined>(undefined)

// Hook personalizado para usar el contexto del Toast
export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

// Tipo que define que `children` es obligatorio y puede ser un nodo React
interface ToastProviderProps {
  children: ReactNode
}

// El proveedor que maneja los toasts
export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const toast = (newToast: Toast) => {
    setToasts((prevToasts) => [...prevToasts, newToast])
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast !== newToast))
    }, 5000) // Elimina el toast después de 5 segundos
  }

  return (
    <ToastContext.Provider value={{ toast }}>
      {children} {/* Aquí se muestra el contenido hijo */}
      <div className="fixed bottom-4 right-4 space-y-2">
        {toasts.map((toast, index) => (
          <div key={index} className={`toast ${toast.variant || 'default'}`}>
            <div>
              <strong>{toast.title}</strong>
              <p>{toast.description}</p>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

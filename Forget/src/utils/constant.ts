const env = (name: string): string => import.meta.env[`VITE_${name}`]

export const PORT = env('PORT')

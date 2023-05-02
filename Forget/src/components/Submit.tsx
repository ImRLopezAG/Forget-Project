interface SubmitProps {
  text: string
  isLoading?: boolean
}
export const Submit: React.FC<SubmitProps> = ({ text, isLoading }) => {
  return (
    <div className='md:flex md:items-center'>
      <div className='md:w-1/3' />
      <div className='md:w-2/3'>
        <input
          className={`shadow bg-primary-500 hover:bg-primary-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded ${
            isLoading ? 'cursor-not-allowed disabled:opacity-50' : ''
          }`}
          type='submit'
          value={text}
        />
      </div>
    </div>
  )
}

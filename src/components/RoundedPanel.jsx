// eslint-disable-next-line react/prop-types
const RoundedPanel = ({bgcolor, children}) => {
  return (
    <div className={`${bgcolor} px-4 py-2 rounded-md shadow-md shadow-slate-400`}>
      {children}
    </div>
  )
}

export default RoundedPanel
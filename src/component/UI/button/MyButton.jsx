import classes from './MyButton.module.css'

const MyButton = ({ children, className, ...props }) => {
  const rootClasses = [className, classes.myBtn]

  return (
    <button {...props} className={rootClasses.join(' ')}>
      {children}
    </button>
  )
}

export default MyButton

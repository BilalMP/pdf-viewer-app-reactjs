interface ErrorMessageProps{
    message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({message}) => {
    return (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg text-center">
            {message}
        </div>
    )
}

export default ErrorMessage
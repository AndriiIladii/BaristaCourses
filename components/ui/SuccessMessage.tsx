

interface SuccessMessageProps {
    onReset: () => void;
}

const SuccessMessage = ({ onReset }: SuccessMessageProps) => {
    return (
        <div className="text-center py-12 animate-smooth-enter">
            <div className="w-16 h-16 bg-[#eef5e6] text-[#6b8e23] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <h3 className="text-2xl font-secondary text-brown mb-2">Заявка прийнята!</h3>
            <p className="text-brown-400 mb-8">Дякуємо за довіру. Ми зв'яжемося з тобою найближчим часом для уточнення деталей.</p>
            <button
                onClick={onReset}
                className="text-sm uppercase tracking-wider text-brown-500 hover:text-brown transition-colors"
            >
                Відправити ще одну
            </button>
        </div>
    )
}

export default SuccessMessage;
export function RadioInput({title}) {
    return (
        <div className="text-[#6E6E6E]">
            <p className="mb-4">Genre:</p>
            <div className="flex justify-between items-center mb-4 md:mb-0">
            <input type="radio" id="male" name="Hola" value="Male" />
                <label htmlFor="male" className="hidden md:inline">Male</label>
                <label htmlFor="male" className="md:hidden">♂</label>

            <input type="radio" id="female" name="Hola" value="Female" />
                <label htmlFor="female" className="hidden md:inline">Female</label>
                <label htmlFor="female" className="md:hidden">♀</label>

            <input type="radio" id="other" name="Hola" value="Other" />
                <label htmlFor="other" className="hidden md:inline">Other</label>
                <label htmlFor="other" className="md:hidden">O</label>

            </div>
        </div>
    );
}



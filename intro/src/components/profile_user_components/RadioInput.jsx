export function RadioInput({title}) {
    return (
        <div className="text-[#6E6E6E]">
            <p className="mb-4">Genre:</p>
            <div className="flex justify-between items-center ">
            <input type="radio" id="male" name="Hola" value="Male" />
                <label htmlFor="male">Male</label>
                <input type="radio" id="female" name="Hola" value="Female" />
                <label htmlFor="female">Female</label>
                <input type="radio" id="other" name="Hola" value="Other" />
                <label htmlFor="other">Other</label>
            </div>
        </div>
    );
}



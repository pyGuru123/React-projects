function ThemeSelector({themeArray, func}) {
    return (
        <div style={{marginBottom:"10px"}}>
            <label htmlFor="themes">Choose a theme :</label>
            <select name="themes" onChange={func}>
                {
                    themeArray.map( theme => (
                        <option value={theme}>{theme}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default ThemeSelector;
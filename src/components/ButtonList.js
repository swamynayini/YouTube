import Button from "./Button";

const ButtonList = ()=>{
    return(
        <div className="flex">
            <Button name = {"ALL"}/>
            <Button name = {"Music"}/>
            <Button name = {"Mixes"}/>
            <Button name = {"Live"}/>
            <Button name = {"News"}/>
            <Button name = {"Folk Music"}/>
            <Button name = {"Recently Uploaded"}/>
            <Button name = {"Watched"}/>
            <Button name = {"New To You"}/>
            <Button name = {"Gaming"}/>
        </div>
    )
}
export default ButtonList;
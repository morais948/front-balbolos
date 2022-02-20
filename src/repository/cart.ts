import product from "../types/product"

class Cart{
    constructor(
        private readonly list: product[] = [], 
        private readonly setList: React.Dispatch<React.SetStateAction<product[]>>
    ){
        this.list = list
        this.setList = setList
    }

    public add(product: product): void {
        const listTemp = [...this.list]
        const indice = this.list.findIndex((prod: product) => prod.desc === product.desc)
        if(indice !== -1){
            const obj = {
                ...this.list[indice]
            }
            obj.qtd++
            delete listTemp[indice]
            listTemp[indice] = obj
            this.setList(listTemp)
        }else{
            listTemp.push(product)
            this.setList(listTemp)
        }
    }

    public remove(product: product): void {
        const indice = this.list.findIndex((prod: product) => prod.desc === product.desc)
        if(this.list[indice].qtd > 1){
            const obj = {
                ...this.list[indice]
            }
            obj.qtd--
            const temp = [...this.list]
            delete temp[indice]
            temp[indice] = obj
            this.setList(temp)            
        }else if(this.list[indice].qtd == 1){
            const listTemp = this.list.filter((prod: product) => prod.desc !== product.desc)
            this.setList(listTemp)
        }
    }

    public removeAll(): void {
        this.setList([])
    }
}

export default Cart
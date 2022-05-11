const computer = {
    processor: "Ryzen 3600",
    ram: "ddr4",
    storage: "m.2",
    get_processor:  () => {
        console.log(this.processor);
        const get_acessories = () => {
            console.log(`ram=> ${this.ram}\nstorage=> ${this.storage}`);
        }
        get_acessories()
    }
}
computer.get_processor()
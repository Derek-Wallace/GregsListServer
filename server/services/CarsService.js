import { dbContext } from "../db/DbContext"


class CarsService{

  async getCars(){
    let cars = await dbContext.Cars.find({})
    return cars
  }
  async newCar(carData){
    let car = await dbContext.Cars.create(carData)
    return car
  }
  async updateCar(id, data){
    let car = await dbContext.Cars.findByIdAndUpdate(id, data, { new: true, runValidators: true})
    return car
  }
  async deleteCar(id){
    let car = await dbContext.Cars.findByIdAndDelete(id)
    return car
  }

}

export const carsService = new CarsService()
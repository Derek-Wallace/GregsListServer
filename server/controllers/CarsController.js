import e from "express"
import { carsService } from "../services/CarsService"
import BaseController from "../utils/BaseController"


export class CarsController extends BaseController {
  constructor() {
    super("api/cars")
    this.router
      .get("", this.getCars)
      .post("", this.newCar)
      .put("/:id", this.updateCar)
      .delete("/:id", this.deleteCar)
  }
  async getCars(req, res, next) {
    try {
      let cars = await carsService.getCars()
      return res.send(cars)
    } catch (error) {
      next(error)
    }
  }

  async newCar(req, res, next) {
    try {
      let car = await carsService.newCar(req.body)
      return res.send(car)
    } catch (error) {
      next(error)
    }
  }

  async updateCar(req, res, next) {
    try {
      let car = await carsService.updateCar(req.params.id, req.body)
      return res.send(car)
    } catch (error) {
      next(error)
    }
  }

  async deleteCar(req, res, next) {
    try {
      let car = await carsService.deleteCar(req.params.id)
      return res.send(car)
    } catch (error) {
      next(error)
    }
  }
}
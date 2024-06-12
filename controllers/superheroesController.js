import Superheroes from "../models/superheroesModel.js";

//CREATE / POST
export const createSuperhero = async(_request, _response) => {
    try {
        const newSuperhero = await Superheroes.create(_request.body)
        _response.status(201).json({
            sucess: true,
            newSuperhero
        })
    } catch(error){
        _response.status(500).json({
            message: error.message
        })
    }
}

//READ / GET ALL
export const getAllSuperheroes = async(_request, _response) => {
    try {
        const superheroes = await Superheroes.find();
        _response.status(200).render("superheroes", {superheroes : superheroes})
    } catch(error){
        _response.status(500).json({
            message: error.message
        })
    }
}

//READ / GET BY ID
export const getSuperheroById = async (_request, _response) => {
    try {
        const superhero = await Superheroes.findById(_request.params.id);

        if (!superhero) {
            return _response.status(404).send(`Superhero with ID: ${_request.params.id} not found, error 404`);
        }

        _response.status(200).render("superHeroesDetail", { hero : superhero });

    } catch (error) {
        _response.status(500).json({
            message: error.message
        });
    }
};

//UPDATE / PATCH
export const updateSuperhero = async(_request, _response) => {
    try {
        const updatedSuperhero = await Superheroes.findByIdAndUpdate(_request.params.id, _request.body, {new: true})

        if (!updatedSuperhero) {
            return _response.status(404).send(`Superhero with ID: ${_request.params.id} not found, error 404`); 
        }

        _response.status(200).json({
            sucess: true,
            updatedSuperhero
        })

    } catch(error){
        _response.status(500).json({
            message: error.message
        })
    }
}

//UPDATE / PUT
export const replaceSuperhero = async (_request, _response) => {
    try {
        const replacedSuperhero = await Superheroes.findOneAndReplace(
            { _id: _request.params.id },
            _request.body,
            { new: true, runValidators: true }
        );

        if (!replacedSuperhero) {
            return _response.status(404).send(`Superhero with ID: ${_request.params.id} not found, error 404`);
        }

        _response.status(200).json({
            success: true,
            replacedSuperhero
        });
    } catch (error) {
        _response.status(500).json({
            message: error.message
        });
    }
};

//DELETE
export const deleteSuperhero = async (_request, _response) => {
    try {
        const deletedSuperhero = await Superheroes.findByIdAndDelete(_request.params.id);

        if (!deletedSuperhero) {
            return _response.status(404).send(`Superhero with ID: ${_request.params.id} not found, error 404`);
        }

        _response.status(200).json({
            success: true,
            message: `Superhero with ID: ${_request.params.id} has been deleted`
        });
    } catch (error) {
        _response.status(500).json({
            message: error.message
        });
    }
};
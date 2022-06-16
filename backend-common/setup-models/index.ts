import mongoose from "mongoose";
import Example from './example'

const setupModels = ($mongoose = mongoose) => ({
    Example: Example($mongoose)
});

export default setupModels;

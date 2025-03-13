const Task = require("../model/task");

const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ mes: error });
    console.log(error);
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ mes: error });
    console.log(error);
  }
};

const singleTask = async (req, res) => {
  try {
    const { id:taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({mes:`No task with the id : ${taskID} `});
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ mes: error });
    console.log(error);
  }
};


const deleteTask = async (req, res) => {

    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID})
        if (!task) {
            return res.status(404).json({mes:`No task with the id : ${taskID} `});
          }
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({ mes: error });
    console.log(error);
    }
 
};



const updatingTask =  async (req, res) => {
    try {
        const {id:taskID}  = req.params

        const task = await Task.findOneAndUpdate({_id:taskID} , req.body, {
            new:true, 
            runValidators: true
        })
        
        if (!task) {
            return res.status(404).json({mes:`No task with the id : ${taskID} `});
          }
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({ mes: error });
        console.log(error);
    }

};

module.exports = {
  getAllTask,
  createTask,
  singleTask,
  updatingTask,
  deleteTask,
};

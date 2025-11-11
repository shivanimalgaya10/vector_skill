const express = require('express');
const router = express.Router();
const { createEmployee, getEmployees, getEmployee, updateEmployee, deleteEmployee } = require('../controllers/employeeController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.route('/').get(protect, authorize('admin','hr'), getEmployees).post(protect, authorize('admin','hr'), createEmployee);
router.route('/:id').get(protect, authorize('admin','hr'), getEmployee).put(protect, authorize('admin','hr'), updateEmployee).delete(protect, authorize('admin','hr'), deleteEmployee);

module.exports = router;
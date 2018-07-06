// Parse, validate, manipulate, and display dates and times in JavaScript. I.T. 
import moment from 'moment';

//declaring const to be uses by filters for date startdate to enddate on calendar or by $amount I.T. 

const filterReducerDefaultState = {
    text: '', 
    sortBy: 'date', 
    startDate: moment().startOf('month'), 
    endDate: moment().endOf('month')
};

export default (state = filterReducerDefaultState, action) =>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return{
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return{
                ...state,
                endDate: action.endDate
            }
        default:
        return state;
    }
};
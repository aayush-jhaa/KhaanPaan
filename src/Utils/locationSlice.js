import { createSlice } from "@reduxjs/toolkit"

const locationSlice = createSlice({
    name: "location",
    initialState: {
        locationDetails: [{
            "pincode": 302004,
            "area": "Raja Park",
            "lat": 26.920980,
            "lng": 75.794220,
            "district": "Jaipur",
            "state": "India"
        }]
    },
    reducers: {
        updateLocation: (state, action) => {
            state.locationDetails = action.payload;
        }
    }
})

export const {updateLocation} = locationSlice.actions;
export default locationSlice.reducer;
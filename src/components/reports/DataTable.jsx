import React from 'react';
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import products from "./products.json";

export default function DataTable() {
    return (
        <div>
            <Grid
                style={{
                    height: "400px",
                }}
                data={products}
            >
                <GridColumn field="ProductID" title="ID" width="40px" />
                <GridColumn field="ProductName" title="Name" width="250px" />
                <GridColumn field="Category.CategoryName" title="CategoryName" />
                <GridColumn field="UnitPrice" title="Price" />
                <GridColumn field="UnitsInStock" title="In stock" />
            </Grid>
        </div>
    )
}

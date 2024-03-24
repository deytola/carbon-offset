import React, { useState } from 'react';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

function ImageUpload() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleFileUpload = () => {
        console.log("File uploaded:", selectedFile);
    };

    return (
        <Card>
            <CardContent>
                <input
                    accept="image/*"
                    id="image-upload-button"
                    type="file"
                    style={{ display: 'none' }}
                    onChange={handleFileSelect}
                />
                <label htmlFor="image-upload-button">
                    <Button variant="contained" component="span">
                        Select Image
                    </Button>
                </label>
                {selectedFile && (
                    <div>
                        <CardMedia
                            component="img"
                            alt="Selected Image"
                            height="140"
                            image={URL.createObjectURL(selectedFile)}
                        />
                        <Button variant="contained" onClick={handleFileUpload}>
                            Upload
                        </Button>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

export default ImageUpload;

interface ErrorDialogProps {
    missingFields: string[];
}

export default function ErrorDialog({ missingFields }: ErrorDialogProps) {
    const fieldMessages = missingFields.join(", ");

    return (
        <div className="bg-red-400 text-white p-2 rounded-md">
            <h3>You need to fill in the following fields: {fieldMessages}</h3>
        </div>
    );
}

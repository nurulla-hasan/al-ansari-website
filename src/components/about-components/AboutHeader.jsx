"use client";

const AboutHeader = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center py-16 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-poltawski text-text-title font-semibold mb-4 tracking-wide">
                Our Values
            </h1>
            <p className="text-base sm:text-lg text-text-muted max-w-2xl">
                Stay informed with our latest legal services, industry updates, and notable firm events.
            </p>
        </div>
    );
};

export default AboutHeader;
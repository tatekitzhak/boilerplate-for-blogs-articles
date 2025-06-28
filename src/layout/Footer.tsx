import React from 'react';

type FooterProps = {
    title: string;
    description: string;
    actions?: React.ReactNode;
};

const Footer: React.FC<FooterProps> = ({ title, description, actions }) => {
    return (
        <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <div id="registered-trademark">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        {title }
                    </span>
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        {description}
                    </span>
                    {actions && <div className="mt-4">{actions}</div>}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
'use client';

import { useRef } from 'react';

import type { FileWithPath } from 'react-dropzone';
import { useDropzone } from 'react-dropzone';

import { BucketIcon } from '@/shared/ui/icons/bucket';

import { FileIcon } from '../../icons/file';
import { UploadIcon } from '../../icons/upload';
import st from './Dropzone.module.scss';

export const Dropdzone = ({
  required,
  name,
  onDrop,
  value,
  label,
  placeholder = 'Upload your up-to-date resume',
  fileFormats,
}: {
  required?: boolean;
  name?: string;
  onDrop?: (files: FileWithPath[] | null) => void;
  value?: FileWithPath[] | null;
  label?: string;
  placeholder?: string;
  fileFormats?: string[];
}) => {
  const hiddenInputRef = useRef<HTMLInputElement | null>(null);

  const { getRootProps, getInputProps, open } = useDropzone({
    multiple: true,
    accept: fileFormats
      ? fileFormats.reduce<Record<string, string[]>>((acc, format) => {
          acc[`application/${format.replace('.', '')}`] = [format];
          return acc;
        }, {})
      : undefined,
    onDrop: (incomingFiles: FileWithPath[]) => {
      let filteredFiles = incomingFiles;
      if (fileFormats && fileFormats.length > 0) {
        filteredFiles = incomingFiles.filter((file) =>
          fileFormats.some((ext) => file.name.toLowerCase().endsWith(ext.toLowerCase()))
        );
      }

      if (onDrop) {
        onDrop(filteredFiles.length ? filteredFiles : null);
      }
    },
  });

  const files: readonly FileWithPath[] = value ?? [];

  return (
    <div className={st.container}>
      <section className={st.innerContainer}>
        {label ? <p className={st.label}>{label}</p> : null}
        <div {...getRootProps({ className: 'dropzone' })} className={st.inner}>
          <input
            type="file"
            name={name}
            required={required}
            style={{ opacity: 0 }}
            ref={hiddenInputRef}
            {...getInputProps()}
          />
          <button
            className={st.chooseFile}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              open();
            }}
          >
            <UploadIcon />
            <p className={st.placeholder}>
              {placeholder}
              {fileFormats && fileFormats.length > 0 ? ` (Allowed: ${fileFormats.join(', ')})` : ''}
            </p>
          </button>
        </div>
      </section>
      <div className={st.filesList}>
        {files.map((file) => (
          <AcceptedFile
            key={file.name}
            fileName={file.name}
            size={`${(file.size / 1024).toFixed(2)} KB`}
            onDelete={() => {
              const updatedFiles = files.filter((f) => f !== file);
              if (onDrop) onDrop(updatedFiles.length ? updatedFiles : null);
            }}
          />
        ))}
      </div>
    </div>
  );
};

const AcceptedFile = ({
  fileName,
  onDelete,
  size,
}: {
  fileName: string;
  size: string;
  onDelete: () => void;
}) => {
  return (
    <section className={st.acceptedFile}>
      <div className={st.fileInfo}>
        <FileIcon />
        <div className={st.fileInfoText}>
          <p className={st.fileName}>{fileName}</p>
          <p className={st.size}>{size}</p>
        </div>
      </div>
      <button type="button" onClick={onDelete}>
        <BucketIcon />
      </button>
    </section>
  );
};

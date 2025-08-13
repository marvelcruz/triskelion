import { Control, FieldPath } from 'react-hook-form';
import { z } from 'zod';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { formSchema } from './Contact';

interface FormInputProps {
  name: FieldPath<z.infer<typeof formSchema>>;
  control: Control<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
  description?: string;
}

const FormInput = ({ name, control, label, placeholder }: FormInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className='flex flex-col gap-2 w-full'>
            <FormLabel className='form-label'>{label}</FormLabel>
            <FormControl>
              <div className='w-full'>
                {name === 'message' ? (
                  <Textarea
                    placeholder={placeholder}
                    {...field}
                    className='form-textarea'
                  />
                ) : (
                  <Input
                    placeholder={placeholder}
                    {...field}
                    className='font-input'
                  />
                )}
              </div>
            </FormControl>
          </div>
          <FormMessage className='text-xs' />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
